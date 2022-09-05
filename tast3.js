const enterprises = [{
        id: 1,
        name: "Предприятие 1",
        departments: [{
                id: 2,
                name: "Отдел тестирования",
                employees_count: 10,
            },
            {
                id: 3,
                name: "Отдел маркетинга",
                employees_count: 20,
            },
            {
                id: 4,
                name: "Администрация",
                employees_count: 15,
            },
        ]
    },
    {
        id: 5,
        name: "Предприятие 2",
        departments: [{
                id: 6,
                name: "Отдел разработки",
                employees_count: 50,
            },
            {
                id: 7,
                name: "Отдел маркетинга",
                employees_count: 20,
            },
            {
                id: 8,
                name: "Отдел охраны труда",
                employees_count: 5,
            },
        ]
    },
    {
        id: 9,
        name: "Предприятие 3",
        departments: [{
            id: 10,
            name: "Отдел аналитики",
            employees_count: 0,
        }, ]
    }
]

//Задания:
/* 1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.

**Пример:**

Предприятие 1 (45 сотрудников)
- Отдел тестирования (10 сотрудников)
- Отдел маркетинга (20 сотрудников)
- Администрация (15 человек)
Предприятие 2 (75 сотрудников)
- Отдел разработки (50 сотрудников)
- Отдел маркетинга (20 сотрудников)
- Отдел охраны труда (5 сотрудников)
Предприятие 3 (нет сотрудников)
- Отдел аналитики (нет сотрудников) */

/* const F1 = () => {
    enterprises.forEach((enterprises_element) => {
        let arrEmpl = []
        enterprises_element.departments.forEach((departments_element) => {
            arrEmpl.push(departments_element.employees_count)
        })
        const allEmployees = arrEmpl.reduce(function(a, b) { return a + b })
        const Text1 = function(allEmployees) {
            if (allEmployees == 0) { return `нет` } else { return allEmployees }
        }
        console.log(`${enterprises_element.name} (${Text1(allEmployees)} сотрудников)`)
        enterprises_element.departments.forEach((departments_element) => {
            const EC = departments_element.employees_count
            const Text2 = function(EC) {
                if (EC == 0) { return `нет` } else { return EC }
            }
            console.log(`- ${departments_element.name} (${Text2(EC)} сотрудников)`)
        })
    })
}

F1() */


/* 2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, к которому относится).

Пример:
getEnterpriseName(4) // Предприятие 1
getEnterpriseName("Отдел маркетинга") // Предприятие 2 */

/* const getEnterpriseName = (idOrName) => {
    enterprises.forEach((enterprise) => {
        enterprise.departments.forEach((department) => {
            if (department.id == idOrName) {
                console.log(enterprise.name)
            } else if (department.name == idOrName) {
                console.log(enterprise.name)
            } else return
        })
    })
}

getEnterpriseName("Отдел тестирования")
getEnterpriseName(6)
getEnterpriseName("10")
getEnterpriseName("Отдел маркетинга")
getEnterpriseName(NaN)
getEnterpriseName(0) */


/* 3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия

Пример:
addEnterprise("Название нового предприятия") */

/* const addEnterprise = (newEnterpriseName) => {
    enterprises.push({ id: getNewId(enterprises), name: newEnterpriseName, departments: [] })
}
const getNewId = (enterprises) => {
    let new0 = 0
    enterprises.forEach((el) => {
        if (el.id > new0) {
            new0 = el.id
            el.departments.forEach((dep) => {
                if (dep.id > new0) {
                    new0 = dep.id
                }
            })
        }
    })
    return (new0 + 1)
}
addEnterprise("Предприятие 66")
console.log(enterprises) */

/* 4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.

Пример:
addDepartment(1, "Название нового отдела") */

/* const addDepartment = (entID, depName) => {
    enterprises.forEach((ent) => {
        if (ent.id == entID) {
            const getNewId = (enterprises) => {
                let new0 = 0
                enterprises.forEach((el) => {
                    if (el.id > new0) {
                        new0 = el.id
                        el.departments.forEach((dep) => {
                            if (dep.id > new0) {
                                new0 = dep.id
                            }
                        })
                    }
                })
                return (new0 + 1)
            }
            ent.departments.push({ id: getNewId(enterprises), name: depName, employees_count: Number })
        }
    })
}

addDepartment(1, "Почта")
console.log(enterprises[0]) */


/* 5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.

Пример:
editEnterprise(1, "Новое название предприятия") */

/* const editEnterprise = (entID, newEntName) => {
    enterprises.forEach((ent) => {
        if (ent.id == entID) {
            ent.name = newEntName
        }
    })
}
editEnterprise(1, "Фабрика")
console.log(enterprises) */


/* 6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.

Пример:
editDepartment(7, "Новое название отдела") */

/* const editEnterprise = (depID, newDepName) => {
    enterprises.forEach((ent) => {
        ent.departments.forEach((dep) => {
            if (dep.id == depID) {
                dep.name = newDepName
            }
        })
    })
}
editEnterprise(2, "Фабрика")
console.log(enterprises[0]) */


/* 7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.

Пример:
deleteEnterprise(1) */

/* const deleteEnterprise = (entID) => {
    enterprises.forEach((ent, ind) => {
        if (ent.id == entID) {
            enterprises.splice(ind, 1)
        }
    })
}
deleteEnterprise(5)
console.log(enterprises) */


/* 8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.

Пример:
deleteDepartment(3) */

/* const deleteDepartment = (depID) => {
    enterprises.forEach((ent) => {
        ent.departments.forEach((dep, ind) => {
            if (dep.id == depID && dep.employees_count == 0) {
                ent.departments.splice(ind, 1)
            }
        })
    })
}
deleteDepartment(10)
console.log(enterprises[2]) */

/* 9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).

Пример:
moveEmployees(2, 3)
 */

/* const moveEmployees = (outID, inID) => {
    enterprises.forEach((ent) => {
        ent.departments.forEach((dep) => {
            if (dep.id == outID) {
                const Empl = dep.employees_count;
                dep.employees_count -= Empl;
                enterprises.forEach((ent) => {
                    ent.departments.forEach((dep) => {
                        if (dep.id == inID) {
                            dep.employees_count += Empl
                        }
                    })
                })
            }
        })
    })
}
moveEmployees(2, 4)
console.log(enterprises[0]) */