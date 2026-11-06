import 'dotenv/config';
const openrouter = function (body) {
    return fetch('https://openrouter.ai/api/v1/responses', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });
};

export default openrouter;