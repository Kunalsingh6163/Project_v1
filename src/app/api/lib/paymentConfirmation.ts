async function paymentConfirmation(name: any, emailid: any,mobile:any,image:any) {
    const response = await fetch('http://localhost:8000/lmsusers/paymentConfirmation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, emailid,mobile, image }),
    });
  
    if (!response.ok) {
      throw new Error('failed to submit payment');
    }
  
    const data = await response.json();
    return data;
  };
  export {paymentConfirmation}