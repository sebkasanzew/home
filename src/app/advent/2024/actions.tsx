'use server'
 
import { redirect } from 'next/navigation'
 
export async function createPost(id: string) {

  redirect(`/advent/${id}`) // Navigate to the new post page
}