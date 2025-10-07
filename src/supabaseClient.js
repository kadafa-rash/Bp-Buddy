import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ejrsrqrstqmzppujrkwi.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqcnNycXJzdHFtenBwdWpya3dpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkzOTY3MjYsImV4cCI6MjA3NDk3MjcyNn0.aBqzclccjSR4ku2Xuhuidh7tyOECRSDfSIgZ2I9B0pg';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
