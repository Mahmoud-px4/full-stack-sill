export const barVariant = {
    hidden: {
        x: "130vw",
        transition: {
            duration: .4,
            ease: "easeOut",
        }
    },
    visible: {
        x: 0,
        transition: {
            duration: .4,
            ease: "easeIn",
        }
    }
}


export const accessVariant = {
    hidden: {
        y: '100vh',
        transition: {
            duration: 0.8,
            ease: "easeOut",
        }
    },
    visible: {
        y: '-50%',
        transition: {
            duration: 0.8,
            ease: "easeIn",
        }
    }
}

export const messageVariant = {
    hidden: {
        opacity: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        }
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.2,
            ease: "easeIn",
        }
    }
}
