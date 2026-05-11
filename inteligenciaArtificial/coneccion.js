import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();

const gentAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const modelo = gentAI.getGenerativeModel({model: 'gemini-flash-latest',
        generationConfig:{
            temperature: 0.2,
            topP: 0.8,
            topK: 40,
            responseMimeType: 'application/json'
        }
});

export default modelo;