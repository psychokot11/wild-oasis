import { createClient } from '@supabase/supabase-js'

export const supabaseURL = 'https://rdirjjuufwlzuztyzhod.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJkaXJqanV1ZndsenV6dHl6aG9kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU1NTMxOTMsImV4cCI6MjA0MTEyOTE5M30.BTst9y9XV8l4D-1NDYd54ZC4y8fkZ_yR39qdR3QFSDU'

// Create a single supabase client for interacting with your database
const supabase = createClient(supabaseURL, supabaseKey)

export default supabase
