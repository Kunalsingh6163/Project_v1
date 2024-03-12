// lib/api.ts
async function loginUser(email: any, password: any) {
    const response = await fetch('http://localhost:8000/lmsuser/login', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
  
    if (!response.ok) {
      throw new Error('Login failed');
    }
  
    const data = await response.json();
    return data;
  };

  async function signinUser(name: any, mobile: any, emailid: any, password: any ) {
    console.log(name, mobile, emailid, password, "password here")
    const response = await fetch('http://localhost:8000/lmsusers/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, mobile, emailid, password, }),
    });

    console.log(response)
 
    const data = await response.json();
    return data;
  }
  
  export { loginUser, signinUser };
  