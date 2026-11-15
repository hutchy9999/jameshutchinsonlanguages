-- Enable public access for email subscriptions
-- Allow anyone to insert their email address into the Subscribers table
CREATE POLICY "Allow public email subscriptions" 
ON public."Subscribers" 
FOR INSERT 
TO anon 
WITH CHECK (true);

-- Allow reading subscriber emails (you can remove this if you want to keep emails private)
CREATE POLICY "Allow reading subscribers" 
ON public."Subscribers" 
FOR SELECT 
TO anon 
USING (true);