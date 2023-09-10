export function templateBuilder<T extends {}>(data: any): T {
  if (Object.keys(data).includes("companyName")) {
    return {
      ...data,
      message: `
        Hi my name is ${data["firstName"]} ${data["lastName"]}.\n
        My Company name is ${data["companyName"]}.\n
        My contacts: ${data["phoneNumber"]}.
        Message: ${data["message"]}
      `,
    };
  } else {
    return {
      ...data,
      message: `
        My business activity: ${data["business_activity"]["label"]},
        I will require type of: ${data["premises"]["label"]},
        Owners: ${data["owners"]},
        Vizas: ${data["vizas"]},
        My name is ${data["lastName"]} ${data["firstName"]},\n
        My phone number is: ${data["phoneNumber"]},
        My email is: ${data["email"]}
      `,
    };
  }
}
