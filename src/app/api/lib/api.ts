// lib/api.ts
async function loginUser(emailid: any, password: any) {
    const response = await fetch('http://localhost:8000/lmsusers/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ emailid, password }),
    });
  
    if (!response.ok) {
      throw new Error('User does not exist');
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
  
  async function contactUser(name: any, mobile: any, emailid: any, message: any ) {
    console.log(name, mobile, emailid, message, "message here")
    const response = await fetch('http://localhost:8000/lmsusers/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, mobile, emailid, message, }),
    });

    console.log(response)
 
    const data = await response.json();
    return data;
  }
  
  export { loginUser, signinUser,contactUser };
  