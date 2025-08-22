// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lsosxtrxjshkaygnhiia.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxzb3N4dHJ4anNoa2F5Z25oaWlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3OTY1NjIsImV4cCI6MjA3MTM3MjU2Mn0.WAkL1UGkMYpRYTRmvh68u2lV3sJxrD_GPYtGa2U1O38'

export const supabase = createClient(supabaseUrl, supabaseKey)