package br.unicesumar.restserver.trabalho;

import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value="/manterDisciplina")
@Transactional
public class ManterDisciplinaController {
    
    @Autowired
    private EntityManager em;
    
    @RequestMapping(method = RequestMethod.GET)
    public List<ManterDisciplina> getManterDisciplinas(){
        return getManterDisciplinas();        
    }
    @RequestMapping(method = RequestMethod.POST)
    public void criarManterDisciplina(@RequestBody ManterDisciplina manterDisciplina){
        
        em.persist(manterDisciplina);
    }
    @RequestMapping(method = RequestMethod.PUT)
    public void alterarManterDisciplina(@RequestBody ManterDisciplina manterDisciplina){
        Query manter = em.createQuery("from ManterDisciplina");
        em.persist(manter);
    }
    @RequestMapping(method = RequestMethod.DELETE)
    public void excluirManterDisciplina(@PathVariable Long id){
        Query deletar = em.createQuery("from ManterDisciplina");
        em.remove(deletar);
    }
}
