export const validateToken = async (token: string) => {
    try {
      const response = await fetch(endpoints.validateToken, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (!response.ok) {
        if (response.status === 401) {
          return { isValid: false }; // Return an object, not just a boolean
        }
        throw new Error("Failed to validate token");
      }
  
      const responseData = await response.json();
  
      return {
        isValid: responseData.message === "Token is valid", // Return a boolean isValid
        decoded: responseData.decoded, // Decoded token data (if necessary)
      };
    } catch (error) {
      return { isValid: false }; // Return false in case of error
    }
  };

  export const loginUser = async (email, password) => {
    try {
      const response = await fetch(endpoints.login, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Authentication error");
        } else {
          throw new Error(
            `Unexpected server response: ${response.status} ${response.statusText}`
          );
        }
      }
  
      const responseData = await response.json();
  
      return {
        token: responseData.token,
      };
    } catch (error) {
      throw new Error(error.message || "Error during login");
    }
  };