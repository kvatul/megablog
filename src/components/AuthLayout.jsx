import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Protected = ({ children, authentication = true }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);
  console.log(authentication, authStatus);
  useEffect(() => {
    //setLoading(true);

    //TODO: make it more easy to understand

    // if (authStatus ===true){
    //     navigate("/")
    // } else if (authStatus === false) {
    //     navigate("/login")
    // }

    //let authValue = authStatus === true ? true : false

    //if (authentication && authStatus !== authentication) navigate("/login");
    //else if (!authentication && authStatus !== authentication) navigate("/");

    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }

    setLoading(false);
  }, [authentication, authStatus, navigate]);

  return loading ? <h1>Loading...</h1> : <>{children}</>;
};

export default Protected;
