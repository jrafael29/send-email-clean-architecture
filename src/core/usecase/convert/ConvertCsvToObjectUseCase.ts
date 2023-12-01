
export default class convertCsvToObjectUseCase {
    
    public perform(csv: string): Array<any> {
        const header = csv.split('\n')[0];
        const lines = csv.split('\n').slice(1)

        if(lines.length){
            let jsonData: Array<Object> = [];
            lines.forEach( ( line, index ) => {
                const cols = line.split(',');
                let row: any = {};
                cols.forEach((col, index) => {
                    const key: string = header.split(',')[index];
                    const value: string = col
                    row[key] = value
                })
                jsonData.push(row);
            } )
            return jsonData
        }
        return []
    }

}