import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://zvhqaotjthcfhhcfzpip.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp2aHFhb3RqdGhjZmhoY2Z6cGlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk5MDcwMDIsImV4cCI6MjAxNTQ4MzAwMn0.gl04ZKJimZBombgE0hFRNyfDrITPWMUuSehPNf7clu0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
