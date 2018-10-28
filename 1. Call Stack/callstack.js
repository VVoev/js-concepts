function ceo() {
    console.log('ceo');
    cto();
}

function cto() {
    console.log('cto');
    vpEnginnerring();
}

function vpEnginnerring() {
    console.log('vpEnginnerring');
    teamLead();
}

function teamLead() {
    console.log('team lead')
    developr();
}

function developr() {
    console.log('normal dev :(')
    throw new Error('xx')
}

ceo()

/*
DEVELOPER
TEAMLEAD
VPENGINEERING
CTO
CEO
*/

// lives in the RAM