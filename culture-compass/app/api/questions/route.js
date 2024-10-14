import { NextResponse } from "next/server";
import OpenAI from "openai";
 

const openai = new OpenAI({apiKey: process.env.OPEN_AI_API_KEY})

export async function POST(req) {

    try {
        const { lat, lng } = await req.json();

        if (!lat || !lng) {
            return NextResponse.json({ error: 'Facts, Latitude and longitude are required.' }, { status: 400 });
        }

        const chatCompletion = await openai.chat.completions.create({
            messages: [
                {
                    role: "user",
                    content: `
                    You will generate at most 10 facts about people of colour or places that symbolizes people
                    and generate quizes close to the user's current location. The location of the fact must be very
                    close to the lat and lng given to you. 
                    1. Get facts very close to the user's latitude and longitude. Only generate facts within walking distance to the person's
                    coordinates.
                    Facts are any historical records or or anything that involves black people that is signigicant.
                    It can also include school they atttend, the achiement.
                    
                    2. Generate an object in the following format:
                       - A fact - the relavant fact
                       - A question string: "What is a famous fact about this location?"
                       - Three answer options (one correct and two incorrect, shuffled).
                       - The correct answer.
                       - The latitude of the location that points to the fact
                       - The longitude of the location that points to the fact
                    3. Return the result as a list of JSON objects in the following format:
                    
                    \`[
                      {
                        "fact": "relevant fact"
                        "question": "What is a famous fact about this location?",
                        "options": ["Option1", "Option2", "Option3"],
                        "answer": "Correct Answer",
                        "picture": "doodle_placeholder",
                        "lat": 0.0000 - number ,
                        "lng": 0.0000 - number
                      },
                    ]\`
                    
                    ### User Information:
                    - User's latitude: ${lat}
                    - User's longitude: ${lng}
                    
                    I will be parsing the result directly into a javascript json parser so do not include
                     anything that will make the parser fail.
                     Only return a valid json file
                     

                    `

                    
                    
                },
            ],
           model: "gpt-4o-mini",
           response_format: { "type": "json_object" }
        });

        // Attempt to parse the response as JSON
        const response = chatCompletion.choices[0]?.message?.content.trim();
        
        const resData = JSON.parse(response);
        
        return NextResponse.json(resData);
    } catch (error) {
        console.error('Error generating content:', error);
        return NextResponse.json({ error: 'Failed to generate contents.' }, { status: 500 });
    }
}

