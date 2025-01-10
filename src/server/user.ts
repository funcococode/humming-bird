import type { RegistrationFields } from "@/app/user/page";
import { db } from "./db";

export const createUser = async (
  data: RegistrationFields,
): Promise<{ message: string; success: boolean }> => {
  try {
    const { username, firstname, lastname } = data;
    if (!username || !firstname || !lastname) {
      return {
        message: "Please all the fields",
        success: false,
      };
    }

    const userCount = await db.user.count({
      where: {
        username,
      },
    });

    if (userCount) {
      return {
        message: "Username already exists.",
        success: false,
      };
    } else {
      const response = await db.user.create({
        data: {
          firstname: firstname,
          lastname: lastname,
          username: username,
          name: `${firstname} ${lastname}`,
        },
      });

      if (response.id) {
        return {
          message: `User created successfully : ${firstname} ${lastname}`,
          success: true,
        };
      }
    }

    return {
      message: "Unable to create user at the moment, please try again later",
      success: false,
    };
  } catch (err) {
    console.log(err);
    return {
      message: "Some error occured",
      success: false,
    };
  }
};
