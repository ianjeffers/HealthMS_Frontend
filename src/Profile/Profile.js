import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../LogoutButton/LogoutButton";
import Login from "../Login/Login";
import { authorization_domain, authorization_scope, backend_host } from "../constants";


const Profile = () => {
  const { getAccessTokenSilently, user, isAuthenticated, isLoading } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);


  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = {authorization_domain};
  
      try {
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: backend_host,
            scope: authorization_scope,
          },
        });
  
        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;
  
        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
  
        const { user_metadata } = await metadataResponse.json();
  
        setUserMetadata(user_metadata);
      } catch (e) {
      }
    };
  
    getUserMetadata();
  }, [getAccessTokenSilently, user?.sub]);
  



  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
      <div>
        {isAuthenticated && !isLoading && (
      <div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <h3>User Metadata</h3>
        {userMetadata ? (
          <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
        ) : (
          "No user metadata defined"
        )}
        <LogoutButton/>
      </div>
        )}
    {!isAuthenticated && !isLoading && (
        <Login></Login>
    )}
    </div>
    );
};

export default Profile;