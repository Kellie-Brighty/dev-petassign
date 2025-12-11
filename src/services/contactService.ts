import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase";

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Saves a contact form submission to Firestore
 * This function is publicly accessible - no authentication required
 * 
 * @param formData - The contact form data to save
 * @returns Promise that resolves with the document ID if successful
 * @throws Error if the submission fails
 */
export async function submitContactForm(
  formData: ContactFormData
): Promise<string> {
  try {
    // Validate required fields
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      throw new Error("All fields are required");
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      throw new Error("Invalid email format");
    }

    // Add document to Firestore
    const docRef = await addDoc(collection(db, "contactSubmissions"), {
      name: formData.name.trim(),
      email: formData.email.trim().toLowerCase(),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
      timestamp: serverTimestamp(),
      status: "new", // Can be: new, read, replied, archived
      createdAt: new Date().toISOString(),
    });

    console.log("Contact form submitted successfully with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error submitting contact form:", error);
    
    // Provide user-friendly error messages
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    
    throw new Error("Failed to submit contact form. Please try again later.");
  }
}

