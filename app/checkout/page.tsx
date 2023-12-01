import { LaunchCard } from '@/components/LaunchCard';
import { getLaunches } from '@/lib/graphql/queries'
import Image from 'next/image'

export default async function Home() {
  const launches = await getLaunches();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {launches.map(({ id, mission_name, details }) => (
        <LaunchCard
          key={id}
          name={mission_name}
          description={details}
        />
      ))}
    </main>
  )
}
