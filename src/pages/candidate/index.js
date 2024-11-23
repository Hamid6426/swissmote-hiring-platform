import verifyToken from "@/utils/verifyToken";
import User from "@/models/User"; // Adjust the path as needed

export async function getServerSideProps(context) {
  const token = context.req.cookies.token || "";
  const decodedToken = verifyToken(token);

  if (!decodedToken || decodedToken.role !== "Candidate") {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };
  }

  // Fetch user data from the database
  const user = await User.findById(decodedToken.userId).select("fullName role");

  // To welcome the user
  return {
    props: {
      userData: {
        fullName: user.fullName,
        role: user.role,
      },
    },
  };
}
export default function CandidateDashboard({ userData }) {
  return (
    <>
    HELLOFOASJIFAA AJS JASNF KJSAFN SALF  JSN A JGNRJA MJA VJNV R RE IW J VJNOW JV JWK J WJF WE NWE FWN
    </>
    
  );
}
