import Image from 'next/image';
import SettingsToggle from './SettingsToggle';

async function getUser() {
  await new Promise(r => setTimeout(r, 1000));
  return { name: 'Student' };
}

export default async function DashboardPage() {
  const user = await getUser();

  return (
    <div>
      <h1>Hello {user.name}</h1>

      <Image
        src="/cat.jpg"
        alt="Cat"
        width={800}
        height={400}
      />

      <SettingsToggle />
    </div>
  );
}
