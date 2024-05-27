'use client'
import Image from "next/image";
import { usePathname } from 'next/navigation'
export default function Home() {
  const pathname = usePathname()
  console.log(pathname)
  console.log('root page');
  
  return (
    <main >
      <div>
        <div>
          <Image
            src="/coding-club-logo.svg"
            alt="coding-club-logo"
            width={200}
            height={200}
            priority
          />
        </div>

        
      
      </div>
    </main>
  );
}
