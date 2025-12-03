using ExchangeRateService as service from '../../srv/exchange-rate-service';
annotate service.ExchangeRate with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'RESULT',
                Value : RESULT,
            },
            {
                $Type : 'UI.DataField',
                Label : 'CUR_UNIT',
                Value : CUR_UNIT,
            },
            {
                $Type : 'UI.DataField',
                Label : 'CUR_NM',
                Value : CUR_NM,
            },
            {
                $Type : 'UI.DataField',
                Label : 'TTB',
                Value : TTB,
            },
            {
                $Type : 'UI.DataField',
                Label : 'TTS',
                Value : TTS,
            },
            {
                $Type : 'UI.DataField',
                Label : 'DEAL_BAS_R',
                Value : DEAL_BAS_R,
            },
            {
                $Type : 'UI.DataField',
                Label : 'BKPR',
                Value : BKPR,
            },
            {
                $Type : 'UI.DataField',
                Label : 'YY_EFEE_R',
                Value : YY_EFEE_R,
            },
            {
                $Type : 'UI.DataField',
                Label : 'TEN_DD_EFEE_R',
                Value : TEN_DD_EFEE_R,
            },
            {
                $Type : 'UI.DataField',
                Label : 'KFTC_DEAL_BAS_R',
                Value : KFTC_DEAL_BAS_R,
            },
            {
                $Type : 'UI.DataField',
                Label : 'KFRC_BKPR',
                Value : KFRC_BKPR,
            },
            {
                $Type : 'UI.DataField',
                Label : 'UPDATE_AT',
                Value : UPDATE_AT,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'RESULT',
            Value : RESULT,
        },
        {
            $Type : 'UI.DataField',
            Label : 'CUR_UNIT',
            Value : CUR_UNIT,
        },
        {
            $Type : 'UI.DataField',
            Label : 'CUR_NM',
            Value : CUR_NM,
        },
        {
            $Type : 'UI.DataField',
            Label : 'TTB',
            Value : TTB,
        },
        {
            $Type : 'UI.DataField',
            Label : 'TTS',
            Value : TTS,
        },
    ],
);

