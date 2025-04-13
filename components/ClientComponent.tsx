"use client";

import { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { log } from "console";

export default function ClientComponent() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function getUser() {
      const supabase = createClient();
      const { data, error } = await supabase.auth.getUser();
      if (error || !data?.user) {
        console.log("User does not exist");
      } else {
        setUser(data?.user);
      }
    }
    getUser();
  }, []);

  return <h2>{user?.email}</h2>;
}
