export const nextState = (state: string):string => {
    switch (state){
        case "interviewsInitial":
            return "interviewsTechnique";
        case "interviewsTechnique":
            return "offer";
        case "offer":
            return "assignment";
        case "assignment":
            return "rejection";
        default:
            return "interviewsInitial";
    }
}

export const prevState = (state: string):string => {
    switch (state){
        case "rejection":
            return "assignment";
        case "assignment":
            return "offer";
        case "offer":
            return "interviewsTechnique";
        case "interviewsTechnique":
            return "interviewsInitial";
        default:
            return "rejection";
    }
}