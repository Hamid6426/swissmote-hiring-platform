import "./../styles/globals.css";
import "./../styles/darkmode.css";
import { useRouter } from "next/router";
import AdminLayout from "./../layouts/AdminLayout";
import HumanResourceLayout from "./../layouts/HumanResourceLayout";
import GuestLayout from "./../layouts/GuestLayout";
import JobSeekerLayout from "./../layouts/JobSeekerLayout";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // Define routes where the sidebar should not be displayed
  const noSidebarRoutes = [
    "/",
    "/authentication/sign-up",
    "/authentication/login",
    "/authentication/forgot-password",
  ];

  // Check if the route starts with "/admin-dashboard"
  const isAdminRoute = router.pathname.startsWith("/admin");

  // Check if the route starts with "/parent-dashboard"
  const isHumanResourceRoute = router.pathname.startsWith("/human-resource");

  // Check if the route starts with "/student-dashboard"
  const isJobSeekerRoute = router.pathname.startsWith("/job-seeker");

  // Check if the route starts with "/teacher-dashboard"
  // const isGuestRoute = router.pathname.startsWith("/guest");

  // Check if the current route matches a dynamic path for reset password
  const isResetPasswordRoute = router.asPath.startsWith(
    "/authentication/reset-password/"
  );

  // Determine if the sidebar should be shown
  const showSidebar =
    !noSidebarRoutes.includes(router.pathname) && !isResetPasswordRoute;

  return (
    <>
      {isAdminRoute ? (
        // For admin routes, wrap the page with AdminLayout
        <AdminLayout>
          {showSidebar ? (
            <Component {...pageProps} />
          ) : (
            <Component {...pageProps} />
          )}
        </AdminLayout>
      ) : isHumanResourceRoute ? (
        // For parent routes, wrap the page with ParentLayout
        <HumanResourceLayout>
          {showSidebar ? (
            <Component {...pageProps} />
          ) : (
            <Component {...pageProps} />
          )}
        </HumanResourceLayout>
      ) : isJobSeekerRoute ? (
        // For parent routes, wrap the page with ParentLayout
        <JobSeekerLayout>
          {showSidebar ? (
            <Component {...pageProps} />
          ) : (
            <Component {...pageProps} />
          )}
        </JobSeekerLayout>
      // ) : isGuestRoute ? (
        // For student routes, wrap the page with StudentLayout
        // <GuestLayout>
        //   {showSidebar ? (
        //     <Component {...pageProps} />
        //   ) : (
        //     <Component {...pageProps} />
        //   )}
        // </GuestLayout>
      ) : // For all other routes, just render the component directly
      showSidebar ? (
        <Component {...pageProps} />
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}
