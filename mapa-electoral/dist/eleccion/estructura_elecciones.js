
var estructura_elecciones = {
    'paso2019':{
        'intendente':{
            'todos': {
                'data': paso2019_intendente_todas,
                'header': paso2019_intendente_todas_listas,
                'default_total': paso2019_intendente_todas_listas[paso2019_intendente_todas_listas.length - 1],
                'default_base': paso2019_intendente_todas_listas[0]
            },
            'interna': {
                'data': paso2019_intendente_interna,
                'header': paso2019_intendente_interna_listas,
                'default_total': paso2019_intendente_interna_listas[paso2019_intendente_interna_listas.length - 1],
                'default_base': paso2019_intendente_interna_listas[0]
            },
            'jxc_vs_fdt' : {
                'data': paso2019_intendente_jxc_vs_fdt,
                'header': paso2019_intendente_jxc_vs_fdt_listas,
                'default_total': paso2019_intendente_jxc_vs_fdt_listas[paso2019_intendente_jxc_vs_fdt_listas.length - 1],
                'default_base': paso2019_intendente_jxc_vs_fdt_listas[0]
            }
        },
        'presidente' : {
            'jxc_vs_fdt' : {
                'data': paso2019_presidente_jxc_vs_fdt,
                'header': paso2019_presidente_jxc_vs_fdt_listas,
                'default_total': paso2019_presidente_jxc_vs_fdt_listas[paso2019_presidente_jxc_vs_fdt_listas.length - 1],
                'default_base': paso2019_presidente_jxc_vs_fdt_listas[0]
            },
            'todos': {
                'data': paso2019_presidente_todos,
                'header': paso2019_presidente_todos_listas,
                'default_total': paso2019_presidente_todos_listas[paso2019_presidente_todos_listas.length - 1],
                'default_base': paso2019_presidente_todos_listas[0]
            },
            'interna': undefined
        }
    },
    'general2019': {
        'intendente': {
            'todos': {
                'data': general2019_intendente_todas,
                'header': general2019_intendente_todas_listas,
                'default_total': general2019_intendente_todas_listas[general2019_intendente_todas_listas.length - 1],
                'default_base': general2019_intendente_todas_listas[0]
            },
            'jxc_vs_fdt' : {
                'data': general2019_intendente_jxc_vs_fdt,
                'header': general2019_intendente_jxc_vs_fdt_listas,
                'default_total': general2019_intendente_jxc_vs_fdt_listas[general2019_intendente_jxc_vs_fdt_listas.length - 1],
                'default_base': general2019_intendente_jxc_vs_fdt_listas[0]
            },
            'interna': undefined
        },
        'presidente': {
            'jxc_vs_fdt': undefined,
            'todos': undefined,
            'interna': undefined
        }
    }
}