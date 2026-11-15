import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const CONVERTKIT_API_KEY = Deno.env.get('CONVERTKIT_API_KEY');
const CONVERTKIT_FORM_ID = Deno.env.get('CONVERTKIT_FORM_ID');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface SubscribeRequest {
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email }: SubscribeRequest = await req.json();

    if (!email) {
      return new Response(
        JSON.stringify({ error: 'Email is required' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    console.log('Subscribing email to ConvertKit:', email);

    // Subscribe to ConvertKit
    const convertkitResponse = await fetch(
      `https://api.convertkit.com/v3/forms/${CONVERTKIT_FORM_ID}/subscribe`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          api_key: CONVERTKIT_API_KEY,
          email: email,
        }),
      }
    );

    const convertkitData = await convertkitResponse.json();

    if (!convertkitResponse.ok) {
      console.error('ConvertKit API error:', convertkitData);
      throw new Error(convertkitData.message || 'Failed to subscribe to ConvertKit');
    }

    console.log('Successfully subscribed to ConvertKit:', convertkitData);

    return new Response(
      JSON.stringify({ success: true, data: convertkitData }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error: any) {
    console.error('Error in subscribe-convertkit function:', error);
    return new Response(
      JSON.stringify({ error: error.message || 'Failed to subscribe' }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
};

serve(handler);
