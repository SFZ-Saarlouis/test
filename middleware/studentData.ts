import { Middleware } from '@nuxt/types'
import { ToastProgrammatic as Toast } from 'buefy'
import data from "~/assets/data.json";

const myMiddleware: Middleware = (context) => {
    const student = context.$readFromStorage("student", {})
    if (context.route.fullPath === "/") {
        return;
    }
    if (
        isEmpty(student.firstName) ||
        isEmpty(student.lastName) ||
        isEmpty(student.school) ||
        isEmpty(student.schoolClass)
    ) {
        context.redirect("/");
        return;
    }
    if (context.route.fullPath === "/end") {
        data.forEach(item => {
            const solution = context.$readFromStorage(item.name + "-solution", {});
            if (Object.keys(solution).length === 0) {
                context.redirect(`/${item.name}`)
                Toast.open('Du musst erst alle Seiten mindestens einmal angeklickt haben')
                return;
            }
        })
    }
}

function isEmpty(str: string): boolean {
    return !str || 0 === str.length;
}

export default myMiddleware