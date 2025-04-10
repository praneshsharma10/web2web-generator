require("dotenv").config();


import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic();

async function home () {
    const msg = await anthropic.messages.create({
        model: "claude-3-7-sonnet-20250219",
        max_tokens: 1024,
        messages: [{ role: "user", content: "what is 2 + 2 " }],
      });
      console.log(msg);
      
}


home();