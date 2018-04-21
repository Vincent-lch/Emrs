var emptyMr = {
    basicInfo: {
        admissionNum: "",
        bedNum: "",
        doctor: null,
        recorder: "",
        name: "",
        age: "",
        medicalCardNum: "",
        idNum: "",
        cellphone1: "",
        cellphone2: "",
        telephone: "",
        gender: "",
        nationality: "",
        birthAddress: {
            province: "",
            city: ""
        },
        birthday: {
            time: ""
        },
        profession: "",
        address: {
            province: "",
            city: "",
            area: "",
            town: "",
            detail: ""
        }
    },
    historyOfPresentIllness: {
        careCauses: [],
        careCauseOthers: "",
        chestPain: {
            timesPerDay: "",
            timesPerWeek: "",
            timesPerMonth: "",
            timesPerYear: "",
            onsetTime: [],
            onsetTimeOthers: "",
            diseaseBodyParts: [],
            relievingFactors: [],
            relievingDuration: "",
            relievingFactorsOthers: "",
            precipitatingFactors: [],
            precipitatingFactorsOthers: "",
            radiationSites: [],
            radiationSitesOthers: "",
            simultaneousPhenomena: [],
            simultaneousPhenomenonOthers: ""
        },
        chestDistress: {
            timesPerDay: "",
            timesPerWeek: "",
            timesPerMonth: "",
            timesPerYear: "",
            onsetTime: [],
            onsetTimeOthers: "",
            diseaseBodyParts: [],
            relievingFactors: [],
            relievingDuration: "",
            relievingFactorsOthers: "",
            precipitatingFactors: [],
            precipitatingFactorsOthers: "",
            radiationSites: [],
            radiationSitesOthers: "",
            simultaneousPhenomena: [],
            simultaneousPhenomenonOthers: ""
        },
        dyspnea: {
            timesPerDay: "",
            timesPerWeek: "",
            timesPerMonth: "",
            timesPerYear: "",
            onsetTime: [],
            onsetTimeOthers: ""
        },
        palpitation: {
            timesPerDay: "",
            timesPerWeek: "",
            timesPerMonth: "",
            timesPerYear: "",
            onsetTime: [],
            onsetTimeOthers: ""
        },
        abnormalEcg: {
            timesPerDay: "",
            timesPerWeek: "",
            timesPerMonth: "",
            timesPerYear: "",
            onsetTime: [],
            onsetTimeOthers: ""
        }
    },
    anamnesis: {
        isLipidAbnormality: "",
        lipidAbnormalityType: "",
        lipidAbnormalityDuration: "",
        isLipidAbnormalityUnderTreatment: "",
        lipidAbnormalityDrugName: "",
        isEssentialHypertension: "",
        essentialHypertensionDuration: "",
        maximumBP: { SBP: '', DBP: '' },
        ordinaryBP: { SBP: '', DBP: '' },
        isEssentialHypertensionUnderTreatment: "",
        essentialHypertensionDrugName: "",
        isDysglycemia: "",
        dysglycemiaDuration: "",
        dysglycemiaType: "",
        isDiabetesMellitus: "",
        diabetesMellitusDuration: "",
        diabetesMellitusType: "",
        isDiabetesMellitusUnderTreatment: "",
        diabetesMellitusTreatmentMethod: [],
        diabetesMellitusOralDrugName: "",
        isGout: "",
        goutDuration: "",
        serumUricAcidLevel: "",
        isRenalInsufficiency: "",
        renalInsufficiencyDuration: "",
        maximumCr: "",
        recentCr: "",
        renalInsufficiencyEtiology: "",
        isOldMyocardialInfarction: "",
        oldMyocardialInfarctionOnsetTimeYear: "",
        oldMyocardialInfarctionOnsetTimeMonth: "",
        oldMyocardialInfarctionOnsetFrequency: "",
        oldMyocardialInfarctionLocation: [],
        oldMyocardialInfarctionLocationOthers: "",
        isPciHistory: "",
        isCabgHistory: "",
        isCasGt50History: "",
        isAtrialFibrillation: "",
        isOtherHeartDiseaseHistory: "",
        otherHeartDiseaseType: [],
        otherHeartDiseaseTypeOthers: "",
        isDeepVenousThrombosis: "",
        deepVenousThrombosisOnsetTimeYear: "",
        deepVenousThrombosisOnsetTimeMonth: "",
        deepVenousThrombosisInducements: [],
        deepVenousThrombosisInducementsOthers: "",        
        deepVenousThrombosisSymptoms: [],
        deepVenousThrombosisDiagnosisResult: "",
        isOldIschemicStroke: "",
        oldIschemicStrokeTypes: [],
        isVascularDiseases: "",
        vascularDiseasesTypes: [],
        isHemorrhage: "",
        hemorrhageTypes: [],
        isBleeding: "",
        bleedingCauses: []
    },
    riskFactors: {
        isSomking: "",
        smokingDuration: "",
        piecesPerDay: "",
        cigretteType: [],
        cigretteTypeOthers: "",
        isSmokingCessation: "",
        smokingCessationDuration: "",
        isDrinking: "",
        drinkingDuration: "",
        talesPerDay: "",
        wineType: [],
        wineTypeOthers: "",
        isTemperance: "",
        temperanceDuration: "",
        drinkingAmount: "",
        paddyPotato: "",
        grainMixedBeans: "",
        potato: "",
        vegetables: "",
        fruits: "",
        livestockMeat: "",
        aquaticProducts: "",
        eggs: "",
        milkProducts: "",
        soybeansNuts: "",
        salt: "",
        sugar: "",
        oil: "",
        fatMeat: "",
        visceral: "",
        bloodType: "",
        isLongtermPsychologicalStress: "",
        isDepression: "",
        exerciseType: "",
        exerciseDuration: "",
        exerciseMode: [],
        exerciseModeOthers: "",
        isCentralObesity: "",
        centralObesityDuration: "",
        height: "",
        weight: "",
        BMI: "",
        waistline: "",
        neckCircumference: "",
        hipline: ""
    },
    familyHistory: {
        prematureChd: {
            isPrematureChd: "",
            onsetMembers: []
        },
        myocardialInfarction: {
            isMyocardialInfarction: "",
            onsetMembers: []
        },
        suddenDeath: {
            isSuddenDeath: "",
            onsetMembers: []
        },
        ischemicStroke: {
            isIschemicStroke: "",
            onsetMembers: []
        },
        hemorrhagicStroke: {
            isHemorrhagicStroke: "",
            onsetMembers: []
        }
    },
    physicalExamination: {
        bodyTemperature: "",
        respiratoryRate: "",
        isBreathSoundsNormal: "",
        breathSoundsType: "",
        breathSoundsPart: "",
        isLungWetRales: "",
        lungWetRalesRange: "",
        lungWetRalesPart: "",
        heartRate: "",
        cardiacRhythm: "",
        heartSoundS1Result: "",
        isS3S4GallopRhythm: "",
        pulse: "",
        BP: { SBP: '', DBP: '' },
        isEarLobeLongitudinalCrack: "",
        earLobeLongitudinalCrackParts: [],
        isSkinYellowPigmentTumor: "",
        skinYellowPigmentTumorParts: [],
        isAlopecia: "",
        alopeciaParts: []
    },
    routineExamination: {
        TC: "",
        TG: "",
        LDL: "",
        HDL: "",
        notHDL: "",
        APOA1: "",
        APOB: "",
        bloodGlucoseFasting: "",
        isSerumMyocardialNecrosisMarkers: "",
        myocardialCK: "",
        myocardialCKMB: "",
        myocardialCTnI: "",
        myocardialMb: "",
        isInflammatoryMarkers: "",
        inflammationHsCRP: "",
        inflammationIL6: "",
        inflammationIL1Beta: "",
        inflammationTNFAlpha: "",
        heartFailureNTproBNP: "",
        electrolyteNa: "",
        electrolyteK: "",
        electrolyteCa: "",
        electrolyteCl: "",
        isLiverFunction: "",
        totalProtein: "",
        albumin: "",
        totalBilirubin: "",
        directBilirubin: "",
        indirectBilirubin: "",
        ALT: "",
        AST: "",
        isRenalFunction: "",
        Cr: "",
        UA: "",
        BUN: "",
        GFR: "",
        isHepatorenalDisease: "",
        APTT: "",
        PT: "",
        TT: "",
        FIB: "",
        dDimer: "",
        INR: "",
        isINRStable: "",
        redBloodCellCount: "",
        redBloodCellSpecificVolume: "",
        HGB: "",
        leukocyteCount: "",
        neutrophil: "",
        eosinophil: "",
        basophil: "",
        lymphocyte: "",
        monocyte: "",
        isQualitativePlatelet: "",
        PCPLT: "",
        PCMPV: "",
        PCPDW: "",
        PARADP: "",
        PAREpinephrine: "",
        PARArachidonicAcid: "",
        PARCollagen: "",
        PARRistocetin: "",
        ecg: {
            pathologicalQWave: {
                isPathologicalQWave: "",
                qWaveLeads: []
            },
            stSegmentChange: {
                isStSegmentChange: "",
                stSegmentDepression: {
                    isStSegmentDepression: "",
                    changeDetail: []
                },
                stSegmentElevation: {
                    isStSegmentElevation: "",
                    changeDetail: []
                }
            },
            tWaveChange: {
                isTWaveChange: "",
                changeDetail: []
            },
            arrhythmia: {
                isArrhythmia: "",
                arrhythmiaTypes: [],
                arrhythmiaTypeOthers: ""
            },
            isResultNormal: "",
            findings: ""
        }
    },
    specialExamination: {
        exerciseEcg: {
            exerciseDuration: "",
            isExerciseAngina: "",
            maximumBP: { SBP: "", DBP: "" },
            minimumBP: { SBP: "", DBP: "" },
            stSegmentChange: {
                isStSegmentChange: "",
                stSegmentDepression: {
                    isStSegmentDepression: "",
                    duration: "",
                    changeDetail: []
                },
                stSegmentElevation: {
                    isStSegmentElevation: "",
                    duration: "",
                    changeDetail: []
                }
            },
            tWaveChange: {
                isTWaveChange: "",
                duration: "",
                changeDetail: []
            },
            result: "",
            findings: ""
        },
        holterEcg: {
            totalHeartbeats: "",
            averageHeartRate: "",
            maximalHeartRate: "",
            maximalHeartRateOccurrenceTime: "",
            minimalHeartRate: "",
            minimalHeartRateOccurrenceTime: "",
            arrhythmia: {
                isArrhythmia: "",
                frequentness: "",
                totalAbnormalHeartbeats: "",
                arrhythmiaTypes: []
            },
            pathologicalQWave: {
                isPathologicalQWave: "",
                frequentness: "",
                qWaveLeadsDetail: []
            },
            stSegmentChange: {
                isStSegmentChange: "",
                stSegmentDepression: {
                    isStSegmentDepression: "",
                    frequentness: "",
                    changesDetail: []
                },
                stSegmentElevation: {
                    isStSegmentElevation: "",
                    frequentness: "",
                    changesDetail: []
                }

            },
            tWaveChange: {
                isTWaveChange: "",
                frequentness: "",
                changesDetail: []
            },
            findings: ""
        },
        ucg: {
            LVD: "",
            EDV: "",
            LVS: "",
            ESV: "",
            LAD: "",
            LVPW: "",
            IVST: "",
            isLVEFLtFortyPercent: "",
            ratioEToA: "",
            EF: "",
            isLocalMotionAbnormality: "",
            localMotionAbnormalityParts: [],
            isVntricularAneurysm: "",
            vntricularAneurysmParts: [],
            isLeftVentricularThrombosis: "",
            leftVentricularThrombosisParts: [],
            findings: ""
        },
        pci: {
            num: "",
            date: "",
            pciType: "",
            thrombolysisInterval: "",
            onsetIntervalDay: "",
            onsetIntervalHour: "",
            stayTimePrehospital: "",
            stayTimeEmergencyCall: "",
            stayTimeCCU: "",
            stayTimeConduitRoom: "",
            contrastMedia: [],
            contrastMediaOthers: "",
            coronaryDistributionType: "",
            isCoronaryMalformations: "",
            isGrade3Lesions: "",
            isBloodFlowTIMIGrade0to2: "",
            isCTO: "",
            isCollateralCirculation: "",
            pciPaths: [],
            implantedBracketCountLAD: "",
            implantedBracketCountLCX: "",
            implantedBracketCountRCA: "",
            implantedBracketCountLM: "",
            segmentalLesions: []
        }
    },
    admissionDiagnosis: {
        isSilentMyocardialIschemia: "",
        isCoronaryMicrovascularDisease: "",
        isMyocardialInfarction: "",
        myocardialInfarctionType: "",
        myocardialInfarctionPart: "",
        isAngina: "",
        anginaType: "",
        anginaCcs: "",
        isIschemicCardiomyopathy: "",
        isSuddenCoronaryDeath: "",
        isChestPainOfUnknownOrigin: "",
        isDiagnosisOthers: "",
        diagnosisOthers: ""
    },
    dischargeDiagnosis: {
        isSilentMyocardialIschemia: "",
        isCoronaryMicrovascularDisease: "",
        isMyocardialInfarction: "",
        myocardialInfarctionType: "",
        myocardialInfarctionPart: "",
        isAngina: "",
        anginaType: "",
        anginaCcs: "",
        isIschemicCardiomyopathy: "",
        isSuddenCoronaryDeath: "",
        isChestPainOfUnknownOrigin: "",
        isDiagnosisOthers: "",
        diagnosisOthers: ""
    },
    createTime: "",
    lastUpdateTime: ""
}

module.exports = emptyMr;