import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://dxihxebnhghqhfctgzpy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4aWh4ZWJuaGdocWhmY3RnenB5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMyMzgzNzksImV4cCI6MjA2ODgxNDM3OX0.XrYkZjXW4YRrQKVC8W-VCs7dpFn5S1YQopga0U75ZuU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
