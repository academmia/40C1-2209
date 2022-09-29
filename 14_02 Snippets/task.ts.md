
export interface ITask {
    id: number,
    subject: string,
    description: string,
    status: string,
    owner_id: number,
    owner_name: string,
    project_id: number,
    project_code: string,
    asignee_id: number,
    asignee_name: string,
    created_date: string,
    start_date: string,
    end_date: string
}

