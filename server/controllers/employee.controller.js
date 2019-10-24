const employeeController = {};

employeeController.getEmployees = (req, res) => {
    res.json({
        status: 'los empleados van aqui'
    })
}

employeeController.createEmployee  = (req, res) => {
    res.json({
        status: 'los empleados creados van aqui'
    })
}

employeeController.getEmployee = (req, res) => {
    res.json({
        status: 'empleado id'
    })
}

employeeController.editEmployee = (req, res) => {
    res.json({
        status: 'editar empleado id'
    })
}

employeeController.deleteEmployee = (req, res) => {
    res.json({
        status: 'borrar empleado id'
    })
}



module.exports = employeeController;