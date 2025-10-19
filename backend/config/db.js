import "dotenv/config";
import {neon} from "@neondatabase/serverless"
//create a sql connection using our DB URL
export const sql = neon(process.env.DATABASE_URL)
