export interface Task {
    id: string;
    title: string;
    description: string;
    status: TaskStatus
}

enum TaskStatus {
    OPEN = 'Open',
    IN_PROGRESS = 'In-Progress',
    DONE = 'Done'
}