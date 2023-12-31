import "./app-info.css";

const AppInfo = ({ increased, employees, rise }) => {
    return (
        <div className="app-info">
            <h1>Данные сотрудников в компании GGG</h1>
            <h2>Общее число сотрудников: {employees}</h2>
            <h2>Премию получат: {increased}</h2>
            <h2>На повышение: {rise}</h2>
        </div>
    );
};

export default AppInfo;
