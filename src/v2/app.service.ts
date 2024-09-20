import type { PersonalInfos } from '../types.ts';

export const saveContact = async (contact: PersonalInfos): Promise<void> => {
  const createApiUri = import.meta.env.VITE_SYSTEM_URL! + import.meta.env.VITE_SYSTEM_CREATE_CONTACT!
  const token = import.meta.env.VITE_SYSTEM_API_KEY!
  const mapped = {
    email: contact.email,
    locale: 'fr',
    fields: [
      { slug: 'first_name', value: contact.name },
    ],
  }

  await fetch(createApiUri, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      'X-API-Key': token
    },
    body: JSON.stringify(mapped)
  })
    .then(response => response.json())
    .catch(err => console.error(err));
}
