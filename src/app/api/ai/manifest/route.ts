import { NextResponse } from 'next/server'

export async function GET() {
  const manifest = {
    version: '1.0',
    actions: [
      {
        id: 'prefill_contact_form',
        name: 'Prefill Contact Form',
        description: 'Generate a pre-filled contact form URL for the user',
        kind: 'web-intent',
        method: 'GET',
        endpoint: 'https://seothon-template-nextjs.vercel.app/contact',
        prefill: {
          via: 'query',
          mapping: {
            name: 'name',
            email: 'email',
            service: 'service',
            message: 'message',
          },
        },
        params: [
          {
            name: 'name',
            type: 'string',
            description: "User's full name",
            required: true,
          },
          {
            name: 'email',
            type: 'string',
            description: "User's email address",
            required: true,
            pattern: '^[^@]+@[^@]+\\.[^@]+$',
          },
          {
            name: 'service',
            type: 'string',
            description: 'Service of interest',
            required: false,
            enum: ['ai-seo', 'web-development', 'analytics', 'other'],
          },
          {
            name: 'message',
            type: 'string',
            description: 'Message or inquiry',
            required: false,
          },
        ],
      },
    ],
  }

  return NextResponse.json(manifest, {
    headers: {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      'Content-Type': 'application/json',
    },
  })
}
