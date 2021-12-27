const BASE_URL = "http://localhost:5000/"

export const URL_SCHEDULE = (): string => `${BASE_URL}schedules`

export const URL_GET_POST_AUDITORY = (): string => `${BASE_URL}schedules/auditories`

export const URL_DELETE_PUT_AUDITORY  = (parkingId: number): string => `${BASE_URL}schedules/auditories/${parkingId}`


export const METHOD_DELETE = (): any => {
    return {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        }
    }
}

export const METHOD_POST = (data: {}): any => {
    console.log(JSON.stringify(data))
    return {
        // mode: 'no-cors',
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify(data)
    }
}

export const METHOD_PUT = (data: {}): any => {
    return {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify(data)
    }
}

export function api<T>(url: string, options?: any, params?: any): Promise<T> {
    console.log(url + (params === undefined ? '' : `?${new URLSearchParams(params).toString()}`) + options)
    return fetch(url + (params === undefined ? '' : `?${new URLSearchParams(params).toString()}`), options).then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json() as Promise<T>
        }
    )
}