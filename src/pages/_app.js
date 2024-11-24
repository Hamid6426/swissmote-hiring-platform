import "@/frontend/styles/globals.css";
import { useRouter } from "next/router";
import EmployerLayout from "../frontend/layouts/EmployerLayout";
import CandidateLayout from "../frontend/layouts/CandidateLayout";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const isEmployerRoute = router.pathname.startsWith("/employer");
  const isCandidateRoute = router.pathname.startsWith("/candidate");

  return (
    <>
      {isEmployerRoute ? (
        <EmployerLayout>
          <Component {...pageProps} />
        </EmployerLayout>
      ) : isCandidateRoute ? (
        <CandidateLayout>
          <Component {...pageProps} />
        </CandidateLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}
