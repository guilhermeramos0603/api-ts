import { User } from "../database/models/User";

class UserController {

    async create(req: any, res: any) {
        const { email, name, age } = req.body;

        const user = await User.create({
            email,
            name,
            age
        });

        return res.status(201).json(user);
    }
    async findAll(req: any, res: any) {
        const users = await User.findAll()

        if (users.length == 0) {
            return res.status(204).send()
        }

        return res.status(200).json(users)
    }
    async findOne(req: any, res: any) {
        const { userId } = req.params;

        const user = await User.findByPk(userId)

        if (!user) return res.status(204).send()

        return res.status(200).json(user)


    }
    async update(req: any, res: any) {
        const { userId } = req.params;

        const obj = {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }

        const [user] = await User.update(obj, {
            where: { id: userId }
        })
        if (!user) {
            return res.status(400).json({
                message: 'User not found with id informed'
            })
        }
        return res.status(200).json(obj)
    }
    async destroy(req: any, res: any) {
        const { userId } = req.params;

        const user = await User.destroy({ where: { id: userId } })

        if (!user) {
            return res.status(400).json({
                message: `Fail to find user with id ${userId}`
            })
        }
        return res.status(200).json({
            message: 'User deleted!'
        })
    }

}

export default new UserController();