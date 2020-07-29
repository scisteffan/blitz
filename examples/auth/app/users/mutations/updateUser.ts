import db, {UserUpdateArgs} from "db"

type UpdateUserInput = {
  where: UserUpdateArgs["where"]
  data: UserUpdateArgs["data"]
}

export default async function updateUser(
  {where, data}: UpdateUserInput,
  ctx: Record<any, any> = {},
) {
  // Don't allow updating
  delete data.id

  const user = await db.user.update({where, data})

  return user
}
