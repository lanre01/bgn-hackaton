
import { NextResponse } from "next/server";
import OpenAI from "openai";
 

const openai = new OpenAI({apiKey: process.env.OPEN_AI_API_KEY})

export async function POST(req) {

    try {
        const { lat, lng, facts } = await req.json();

        if (!lat || !lng || !facts) {
            return NextResponse.json({ error: 'Facts, Latitude and longitude are required.' }, { status: 400 });
        }

        const chatCompletion = await openai.chat.completions.create({
            messages: [
                {
                    role: "user",
                    content: `
                    You are an AI that will generate quiz questions based on the user's location and a list of facts. The user's location is provided as latitude and longitude, and the facts are provided as a list of objects containing a fact, latitude, and longitude. Your task is to:
                    
                    1. Sort the facts by their proximity to the user's location.
                    2. Generate a quiz question for each fact in the following format:
                       - A question string: "What is a famous fact about this location?"
                       - Three answer options (one correct and two incorrect, shuffled).
                       - The correct answer.
                       - A placeholder for a doodle image related to the fact.
                    3. Return the result as a list of JSON objects in the following format:
                    
                    \`[
                      {
                        "question": "What is a famous fact about this location?",
                        "options": ["Option1", "Option2", "Option3"],
                        "answer": "Correct Answer",
                        "picture": "doodle_placeholder",
                        "lat": 0.0000,
                        "lng": 0.0000
                      },
                      ...
                    ]\`
                    
                    ### User Information:
                    - User's latitude: ${lat}
                    - User's longitude: ${lng}
                    - facts - ${facts}`
                    
                },
            ],
            model: "gpt-4o-mini",
        });

        // Attempt to parse the response as JSON
        const response = JSON.parse(chatCompletion.choices[0]?.message?.content.trim());

        return NextResponse.json(response);
    } catch (error) {
        console.error('Error generating content:', error);
        return NextResponse.json({ error: 'Failed to generate contents.' }, { status: 500 });
    }
}

