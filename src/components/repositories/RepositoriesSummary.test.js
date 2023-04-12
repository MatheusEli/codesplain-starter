import { screen, render } from "@testing-library/react";
import RepositoriesSummary from "./RepositoriesSummary";


test('displays information about the repository', () => {
    let repository = {
        stargazers_count: 5,
        open_issues: 1,
        forks: 30,
        language: 'Javascript'
    };

    render(<RepositoriesSummary repository={repository}/>);

    
    for(let key in repository){
        const value = repository[key];
        const element = screen.getByText(new RegExp(value));

        expect(element).toBeInTheDocument();
    }

});
    

