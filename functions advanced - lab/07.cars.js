function foo(input) {
    const data = {}

    const instr = {
        create: (n, inherits, n2) =>
            (data[n] = inherits ? Object.create(data[n2]) : {}),
        set: (n, k, v) => (data[n][k] = v),
        print: n => {
            const entry = []
            for (const key in data[n]) {
                entry.push(`${key}:${data[n][key]}`)
            }
            console.log(entry.join(", "))
        },
    }

    input.forEach(x => {
        const [c, n, k, v] = x.split(" ")

        instr[c](n, k, v)
    })
}