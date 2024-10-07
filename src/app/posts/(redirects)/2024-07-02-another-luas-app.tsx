import { redirect } from 'next/navigation';

export default async function AnotherLuasAppRedirect() {
    redirect('/posts/another-luas-app');
}