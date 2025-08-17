import { createClient } from '@supabase/supabase-js';

const URL = "https://vhttttkrkpjdkaqrwcde.supabase.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZodHR0dGtya3BqZGthcXJ3Y2RlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU0NzEwMzksImV4cCI6MjA3MTA0NzAzOX0.J5o45djLADC_-cu38D2NC3OjK2TH1kuR373vCmppV_c";

export const supabase = createClient(URL, API_KEY);